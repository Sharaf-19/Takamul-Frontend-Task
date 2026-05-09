'use client';
// src/components/forms/ContactForm.tsx

import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Props {
  locale: string;
}

const schema = Yup.object({
  name: Yup.string().min(2, 'Too short').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(/^[+\d\s\-()]{7,}$/, 'Invalid phone number')
    .optional(),
  message: Yup.string().min(10, 'Too short').required('Required'),
});

export default function ContactForm({ locale }: Props) {
  const isAr = locale === 'ar';

  const labels = {
    name: isAr ? 'الاسم' : 'Full Name',
    email: isAr ? 'البريد الإلكتروني' : 'Email Address',
    phone: isAr ? 'رقم الهاتف' : 'Phone Number',
    message: isAr ? 'رسالتك' : 'Your Message',
    submit: isAr ? 'إرسال الرسالة' : 'Send Message',
    success: isAr ? 'تم إرسال رسالتك بنجاح.' : 'Your message has been sent successfully.',
    error: isAr ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Something went wrong. Please try again.',
    optional: isAr ? 'اختياري' : 'Optional',
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', message: '' },
    validationSchema: schema,
    onSubmit: async (_values, { setSubmitting, setStatus, resetForm }) => {
      try {
        // Will be wired to Strapi when CMS is ready
        await new Promise(resolve => setTimeout(resolve, 800));
        resetForm();
        setStatus({ success: true });
      } catch {
        setStatus({ success: false });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const inputClass = (field: keyof typeof formik.touched) => `
    w-full bg-white border text-text-primary text-[14px] px-4 py-3 rounded-sm
    placeholder-text-muted/50 outline-none transition-colors duration-200
    ${
      formik.touched[field] && formik.errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-gray-200 focus:border-brown-dark'
    }
  `;

  return (
    <form onSubmit={formik.handleSubmit} noValidate className='flex flex-col gap-5'>
      {/* Name */}
      <div>
        <label htmlFor='name' className='block text-text-primary text-[13px] font-medium mb-1'>
          {labels.name}
        </label>
        <input
          id='name'
          name='name'
          type='text'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={labels.name}
          className={inputClass('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <p className='text-red-400 text-[11px] mt-1' role='alert'>
            {formik.errors.name}
          </p>
        )}
      </div>

      {/* Email + Phone — side by side on desktop */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div>
          <label htmlFor='email' className='block text-text-primary text-[13px] font-medium mb-1'>
            {labels.email}
          </label>
          <input
            id='email'
            name='email'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={labels.email}
            className={inputClass('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <p className='text-red-400 text-[11px] mt-1' role='alert'>
              {formik.errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor='phone' className='block text-text-primary text-[13px] font-medium mb-1'>
            {labels.phone}
            <span className='text-text-muted text-[11px] ms-1'>({labels.optional})</span>
          </label>
          <input
            id='phone'
            name='phone'
            type='tel'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='+966 5x xxx xxxx'
            className={inputClass('phone')}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className='text-red-400 text-[11px] mt-1' role='alert'>
              {formik.errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor='message' className='block text-text-primary text-[13px] font-medium mb-1'>
          {labels.message}
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={labels.message}
          className={`${inputClass('message')} resize-none`}
        />
        {formik.touched.message && formik.errors.message && (
          <p className='text-red-400 text-[11px] mt-1' role='alert'>
            {formik.errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div>
        <button
          type='submit'
          disabled={formik.isSubmitting}
          className='
            border border-brown-dark text-brown-dark text-[14px] px-8 py-3 rounded-sm
            hover:bg-brown-dark hover:text-white transition-colors duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
          '>
          {formik.isSubmitting ? '...' : labels.submit}
        </button>
      </div>

      {/* Status messages */}
      {formik.status?.success === true && (
        <p className='text-green-600 text-[13px]' role='status'>
          {labels.success}
        </p>
      )}
      {formik.status?.success === false && (
        <p className='text-red-400 text-[13px]' role='alert'>
          {labels.error}
        </p>
      )}
    </form>
  );
}
