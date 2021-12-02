import React from 'react';
import { useFormik } from 'formik';
import { Button } from '../../components/button/Button';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Required';
  } else if (values.contactNumber.length > 20) {
    errors.contactNumber = 'Must be 20 characters or less';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 20) {
    errors.message = 'Must be 20 characters or less';
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='form-row text-left py-4'>
        <div className='col'>
          <input
            type='text'
            className='form-control'
            id='firstName'
            name='firstName'
            placeholder='Name'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div style={{ color: '#dc3545' }}>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className='col'>
          {/*<input type="text" className="form-control" placeholder="Last name"/>*/}
          <input
            id='email'
            name='email'
            type='email'
            className='form-control'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: '#dc3545' }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='col'>
          {/*<input type="text" className="form-control" placeholder="Last name"/>*/}
          <input
            id='contactNumber'
            name='contactNumber'
            type='text'
            className='form-control'
            placeholder='Contact'
            onChange={formik.handleChange}
            value={formik.values.contactNumber}
          />
          {formik.errors.contactNumber ? (
            <div style={{ color: '#dc3545' }}>
              {formik.errors.contactNumber}
            </div>
          ) : null}
        </div>
      </div>
      <div className='form-row'>
        <div className='col-md-8'>
          <textarea
            className='form-control'
            id='message'
            onChange={formik.handleChange}
            value={formik.values.message}
            rows='3'
          />
          {formik.errors.message ? (
            <div style={{ color: '#dc3545' }}>{formik.errors.message}</div>
          ) : null}
        </div>

        <div className='col-md-4'>
          <Button
            label='Send'
            backgroundColor='#0170B9'
            primary
            type='submit'
          />
        </div>
      </div>

      {/*<label htmlFor="firstName">First Name</label>*/}
      {/*<input*/}
      {/*  id="firstName"*/}
      {/*  name="firstName"*/}
      {/*  type="text"*/}
      {/*  onChange={formik.handleChange}*/}
      {/*  value={formik.values.firstName}*/}
      {/*/>*/}
      {/*{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}*/}

      {/*<label htmlFor="lastName">Last Name</label>*/}
      {/*<input*/}
      {/*  id="lastName"*/}
      {/*  name="lastName"*/}
      {/*  type="text"*/}
      {/*  onChange={formik.handleChange}*/}
      {/*  value={formik.values.lastName}*/}
      {/*/>*/}
      {/*{formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}*/}

      {/*<label htmlFor="email">Email Address</label>*/}
      {/*<input*/}
      {/*  id="email"*/}
      {/*  name="email"*/}
      {/*  type="email"*/}
      {/*  onChange={formik.handleChange}*/}
      {/*  value={formik.values.email}*/}
      {/*/>*/}
      {/*{formik.errors.email ? <div>{formik.errors.email}</div> : null}*/}
    </form>
  );
}
