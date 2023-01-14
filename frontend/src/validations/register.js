import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(32)
    .trim()
    .matches(/^[a-zA-Z ]{2,32}$/, {
      message:
        'Please provide valid name. Avoid numbers and special characters',
    })
    .required()
    .label('Name'),
  userId: yup
    .string()
    .min(2)
    .max(32)
    .trim()
    .matches(/^[a-zA-Z0-9_]+$/, {
      message: `Please provide valid user id. User ID can consist alphabets, numbers, and '_'.`,
    })
    .required()
    .label('User ID'),
  password: yup.string().required().label('Password'),
});

export default schema;
