import React from 'react';
import { Formik, useField } from 'formik';
import { Button, StyleSheet, View } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import StyledText from '../components/StyleText';
import { loginValidationSchema } from '../validationSchemas/login';

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12,
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

export default function Login() {
    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleSubmit }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            name='email'
                            placeholder='Insert your email...'
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='Insert your password...'
                            secureTextEntry
                        />
                        <Button title="Login" onPress={handleSubmit} />
                    </View>
                )
            }}
        </Formik>
    )
}