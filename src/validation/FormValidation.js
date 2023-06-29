import * as Yup from 'yup'

const formValidationSchema = Yup.object().shape({
    name: Yup.string().max(20).required('Name is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
  });

export default formValidationSchema