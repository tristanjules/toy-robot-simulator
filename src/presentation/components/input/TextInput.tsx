import styled from 'styled-components'

const Input = styled.input<{ width: string }>`
  text-transform: uppercase;
  height: ${(props): string => 
    props.theme.inputTheme.height
  };
  width: ${(props): string => props.width};
  border-radius: ${(props): string =>
    props.theme.inputTheme.borderRadius
  };
  border: 1px solid ${(props): string =>
    props.theme.colorScheme.outline
  };
  background-color: ${(props): string => 
    props.theme.colorScheme.surfaceVariant
  };
  padding: 0px 16px;
  outline: none;

  &:focus {
    border: 1.5px solid ${(props): string => 
      props.theme.colorScheme.onBackground
    };
    border-radius: ${(props): string =>
      props.theme.inputTheme.borderRadius
    };
    padding: 0px 15.5px;

    background-color: ${(props): string => 
      props.theme.colorScheme.surfaceVariant
    };

    &:hover {
      border: 1.5px solid ${(props): string => 
        props.theme.colorScheme.onBackground
      };
    }
  }

  &:hover {
    background-color: ${(props): string => 
      props.theme.colorScheme.surfaceVariant
    };
    border: 1.5px solid ${(props): string =>
      props.theme.colorScheme.onBackground
    };
    padding: 0px 15.5px;
  }

  font-size: 14px;
  color: ${(props): string =>
    props.theme.colorScheme.onBackground
  };
`

export interface TextInputProps {
  type?: 'text' | 'email' | 'number' | 'password'
  prefix?: string
  placeholder?: string
  name?: string
  value?: string
  min?: string
  max?: string
  step?: string
  width?: string
  autoFocus?: boolean
  disabled?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export function TextInput({
  type = 'text',
  prefix,
  placeholder = '',
  name,
  value,
  min,
  max,
  step,
  width='100%',
  autoFocus = false,
  disabled = false,
  onChange }: TextInputProps
): JSX.Element {
  return (
    <Input
      name={ name }
      type={ type }
      value={ value }
      placeholder={ placeholder }
      min={ min }
      max={ max } 
      step={ step }
      width={ width }
      prefix={ prefix }
      autoFocus={ autoFocus }
      disabled={ disabled }
      onChange={ onChange } />
  )
}
