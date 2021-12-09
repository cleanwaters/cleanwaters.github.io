import React from 'react';
import { useFormik } from 'formik';
import { Button } from '../../components/button/Button';
import emailjs from 'emailjs-com';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Required';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      contactNumber: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      const formValues = {
        from_name: values.firstName,
        from_email: values.email,
        contact: values.contactNumber,
        message: values.message,
      };

      // alert(JSON.stringify(formValues, null, 2));

      emailjs.send('service_2bsqjso', 'template_y3f6ycz', formValues).then(
        (result) => {
          console.log(result.text);
          alert(JSON.stringify('Message sent successfully'));
        },
        (error) => {
          console.log(error.text);
        }
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='text-left container px-5'>
      <div className='form d-md-flex'>
        <div className='col  py-4'>
          <input
            type='text'
            className='form-control'
            id='firstName'
            name='firstName'
            placeholder='Name'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            style={{
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)',
              border: 0,
              borderRadius: '8px',
              height: '72px',
            }}
          />
          {formik.errors.firstName ? (
            <div style={{ color: '#dc3545' }}>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className='col  py-4'>
          {/*<input type="text" className="form-control" placeholder="Last name"/>*/}
          <input
            id='email'
            name='email'
            type='email'
            className='form-control'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)',
              border: 0,
              borderRadius: '8px',
              height: '72px',
            }}
          />
          {formik.errors.email ? (
            <div style={{ color: '#dc3545' }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='col  py-4'>
          {/*<input type="text" className="form-control" placeholder="Last name"/>*/}
          <input
            id='contactNumber'
            name='contactNumber'
            type='text'
            className='form-control'
            placeholder='Contact'
            onChange={formik.handleChange}
            value={formik.values.contactNumber}
            style={{
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)',
              border: 0,
              borderRadius: '8px',
              height: '72px',
            }}
          />
          {formik.errors.contactNumber ? (
            <div style={{ color: '#dc3545' }}>
              {formik.errors.contactNumber}
            </div>
          ) : null}
        </div>
      </div>
      <div className='form d-md-flex'>
        <div className='col-md-8'>
          <textarea
            className='form-control'
            id='message'
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder='Enter your message here'
            rows='3'
            style={{
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08)',
              border: 0,
              borderRadius: '8px',
              height: '200px',
            }}
          />
          {formik.errors.message ? (
            <div style={{ color: '#dc3545' }}>{formik.errors.message}</div>
          ) : null}
        </div>

        <div className='col-md-4 text-center my-4 d-md-flex justify-content-center'>
          <div className='align-self-end'>
            <Button
              label='Send'
              backgroundColor='#0170B9'
              primary
              size={'massive'}
              type='submit'
            />
          </div>
        </div>
      </div>
    </form>
  );
}
