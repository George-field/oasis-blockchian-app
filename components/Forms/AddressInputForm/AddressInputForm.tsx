import { Box, Heading, Text } from "@chakra-ui/react";
import { Formik } from "formik"
import { Button, Input } from "../../UI";
import { addressInputFormSchema } from '../utils';

interface AddressInputFormProps {
  isLoading: boolean;
  handleAddressInput: (address: string) => void;
  onSubmit: (address: string, balances: any) => void;
  balance: any;
  submitBtnText: string;
}

const AddressInputForm = ({ isLoading, handleAddressInput, onSubmit, balance, submitBtnText }: AddressInputFormProps) => {

  return (
    <Formik
      // TODO: Use callback here
      onSubmit={({ address }) => onSubmit(address, balance)}
      initialValues={{ address: '' }}
      validationSchema={addressInputFormSchema}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, isValid, touched }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e)
          }}
        >
          <Box>
            <Heading
              size='sm'
            >
              Save Account Balances
            </Heading>
            <Text>
              Provide an Ethereum adddress to find out balances of DAI, USDC and Maker. Submit them to save a snapshot for future refrence. At least one balance must be greater than zero.
            </Text>
            <Input
              placeholder="Enter wallet address..."
              onChange={(e) => {
                handleChange(e);
                isValid && handleAddressInput(e.target.value)
              }}
              value={values.address}
              name='address'
              type='text'
              onBlur={handleBlur}
              valid={!errors.address}
            />
            {errors && errors.address && (
              <Box
                bg='red.100'
                p={2}
                my={2}
              >
                <Text>{errors.address}</Text>
              </Box>
            )}
            <Button
              type='submit'
              isLoading={isLoading}
              isDisabled={!isValid || !!errors.address || !touched.address || (submitBtnText === 'Submitted!')}
              label={submitBtnText}
            />
          </Box>
        </form>
      )}
    </Formik>
  )
}

export default AddressInputForm;