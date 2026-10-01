import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import ModelCard from '@/components/brand/ModelCard';
import Contacts from '@/pages/Contacts';
import { LanguageProvider } from '@/i18n/LanguageContext';
import type { ProductModel } from '@/data/products/types';
import { toast } from '@/hooks/use-toast';

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }));
vi.mock('@/hooks/use-toast', () => ({ toast: vi.fn() }));
vi.mock('@/components/SEO', () => ({ default: () => null }));
vi.mock('@/components/Header', () => ({ default: () => null }));
vi.mock('@/components/Footer', () => ({ default: () => null }));
vi.mock('@/components/PageHero', () => ({ default: () => null }));
vi.mock('@/data/siteImages', () => ({ pageHeroes: { contacts: '' } }));
vi.mock('@/data/products', () => ({ unifiedCategories: [] }));

const text = { ru: 'Описание', en: 'Description', hy: 'Նկարագրություն' };
const specs = { ru: ['Параметр'], en: ['Spec'], hy: ['Բնութագիր'] };
const model: ProductModel = {
  id: 'test', name: 'Model & Plus', description: text, specs,
  sizeVariants: [
    { label: '550', description: text, specs },
    { label: '700 / XL', description: text, specs },
  ],
};

function mount(product = model) {
  return render(<LanguageProvider><MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/" element={<ModelCard model={product} fallbackImage="/test.jpg" solutionName="Террасы & окна" />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </MemoryRouter></LanguageProvider>);
}

function fillForm() {
  fireEvent.change(screen.getByLabelText(/Имя/), { target: { value: 'Test Client' } });
  fireEvent.change(screen.getByLabelText(/Телефон/), { target: { value: '+37491000000' } });
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'test@example.com' } });
  const objectType = document.querySelector('select[name="objectType"]')!;
  fireEvent.change(objectType, { target: { value: 'house' } });
}

beforeEach(() => { localStorage.clear(); vi.clearAllMocks(); });
afterEach(cleanup);

describe('product enquiry', () => {
  it('sends the selected variant and solution through the contact form', async () => {
    vi.mocked(emailjs.send).mockResolvedValue({ status: 200, text: 'OK' });
    mount();
    fireEvent.click(screen.getByRole('tab', { name: '700 / XL' }));
    fireEvent.click(screen.getByRole('link'));
    expect(document.querySelector('textarea')!.value).toContain('Model & Plus (700 / XL)');
    expect(document.querySelector('select[name="solutionType"]')).toHaveValue('Террасы & окна');
    fillForm();
    fireEvent.submit(document.querySelector('form')!);
    await waitFor(() => expect(emailjs.send).toHaveBeenCalledOnce());
    expect(vi.mocked(emailjs.send).mock.calls[0][2]).toEqual(expect.objectContaining({
      user_name: 'Test Client', language: 'ru',
      message: expect.stringContaining('Model & Plus (700 / XL)'),
    }));
    expect(vi.mocked(emailjs.send).mock.calls[0][2].message).toContain('Террасы & окна');
    await waitFor(() => expect(screen.getByLabelText(/Имя/)).toHaveValue(''));
    expect(toast).toHaveBeenCalledWith(expect.not.objectContaining({ variant: 'destructive' }));
  });

  it('includes the default variant before the user switches it', () => {
    mount();
    fireEvent.click(screen.getByRole('link'));
    expect(document.querySelector('textarea')!.value).toContain('Model & Plus (550)');
  });

  it('supports products without variants', () => {
    mount({ ...model, sizeVariants: undefined });
    expect(screen.queryByRole('tab')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('link'));
    expect(document.querySelector('textarea')!.value).toContain('Model & Plus');
    expect(document.querySelector('textarea')!.value).not.toContain('(550)');
  });

  it('preserves input after a failed submission and allows retry', async () => {
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error('offline')).mockResolvedValueOnce({ status: 200, text: 'OK' });
    mount();
    fireEvent.click(screen.getByRole('link'));
    fillForm();
    fireEvent.submit(document.querySelector('form')!);
    await waitFor(() => expect(toast).toHaveBeenCalledWith(expect.objectContaining({ variant: 'destructive' })));
    expect(screen.getByLabelText(/Имя/)).toHaveValue('Test Client');
    expect(document.querySelector('button[type="submit"]')).not.toBeDisabled();
    fireEvent.submit(document.querySelector('form')!);
    await waitFor(() => expect(emailjs.send).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(screen.getByLabelText(/Имя/)).toHaveValue(''));
  });
});