'use client';
// src/components/forms/SubscribeForm.tsx

import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
});

interface Props {
  placeholder: string;
  buttonLabel: string;
}

export default function SubscribeForm({ placeholder, buttonLabel }: Props) {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting, setStatus, resetForm }) => {
      try {
        // Will be wired to Strapi POST /api/subscribers when CMS is ready
        await new Promise(resolve => setTimeout(resolve, 600)); // mock delay
        resetForm();
        setStatus({ success: true });
      } catch {
        setStatus({ success: false });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className='flex flex-col gap-2'>
      <form onSubmit={formik.handleSubmit} noValidate className='flex items-stretch gap-0'>
        <input
          id='subscribe-email'
          name='email'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          aria-label={placeholder}
          className='
            flex-1 min-w-0 bg-transparent border border-white/60 text-white
            placeholder-white/40 text-[13px] px-4 py-2 rounded-s-sm
            focus:outline-none focus:border-white transition-colors duration-200
          '
        />
        <button
          type='submit'
          disabled={formik.isSubmitting}
          className='
            bg-white text-brown-dark text-[13px] font-medium px-4 py-2
            rounded-e-sm hover:bg-white/90 transition-colors duration-200
            disabled:opacity-60 shrink-0
          '>
          {formik.isSubmitting ? '...' : buttonLabel}
        </button>
      </form>

      {/* Inline validation error */}
      {formik.touched.email && formik.errors.email && (
        <p className='text-white/60 text-[11px] ps-1' role='alert'>
          {formik.errors.email}
        </p>
      )}

      {/* Success / error status */}
      {formik.status?.success === true && (
        <p className='text-white/70 text-[11px] ps-1' role='status'>
          {/* Text will come from translation files */}
          Subscribed successfully.
        </p>
      )}
      {formik.status?.success === false && (
        <p className='text-white/60 text-[11px] ps-1' role='alert'>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
