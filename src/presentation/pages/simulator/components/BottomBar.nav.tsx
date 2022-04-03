import { Field, Form, Formik, FormikProps } from "formik"
import { useRef } from "react"
import { useTheme } from "styled-components"
import { Dimensions, EdgeInsets } from "../../../../resources"
import { BaseContainer, TextInput } from "../../../components"

interface FormData {
  instruction: string
}

export interface BottomBarNavProps {
  onSubmitInstruction: (instruction: string) => void
}

export function BottomBarNav({ onSubmitInstruction }: BottomBarNavProps): JSX.Element {

  const theme = useTheme()
  const formRef = useRef<FormikProps<FormData>>(null)
  const initialValues: FormData = {
    instruction: ''
  }

  const _handleSubmit = (values: FormData): void => {
    if (values.instruction && values.instruction !== '') {
      onSubmitInstruction(values.instruction.toUpperCase())
      formRef.current?.setFieldValue('instruction', '')
    }
  }

  return (
    <BaseContainer
      width='100%'
      backgroundColor={ theme.colorScheme.background }
      padding={ EdgeInsets.all(Dimensions.regular)}
    >
      <Formik
        innerRef={ formRef }
        initialValues={ initialValues }
        onSubmit={ _handleSubmit }>
        <Form>
          <Field
            as={ TextInput }
            type='text'
            name='instruction'
            placeholder='Enter an instruction...' />
        </Form>
      </Formik>
    </BaseContainer>
  )
}