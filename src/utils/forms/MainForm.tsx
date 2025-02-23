/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TProp = {
    onSubmit: SubmitHandler<FieldValues>
    children: React.ReactNode
    resolver?: any
    defaultValues?: any
}
type FormConfig = {
    resolver?: any;
    defaultValues?: any;
}

const MainForm = ({ children, onSubmit, resolver, defaultValues }: TProp) => {
    const formConfig: FormConfig = {}

    if (resolver) {
        formConfig.resolver = resolver
    }
    if (defaultValues) {
        formConfig.defaultValues = defaultValues
    }
    const methods = useForm(formConfig);
    const submit = (data: FieldValues) => {

        onSubmit(data)
        methods.reset()
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)} >
                {children}
            </form>
        </FormProvider>
    );
};

export default MainForm;