import { object, string } from 'yup';
import web3 from 'web3';

export const addressInputFormSchema = object({
  address: string().required().test('validAddress', 'Not valid ethereum address', (value) => {
    // convert to boolean as possible string retruned
    const validAddress = !!value && web3.utils.isAddress(value)

    return validAddress;
  }),
});
