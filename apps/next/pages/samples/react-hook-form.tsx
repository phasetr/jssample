import { Box, Link as MuiLink } from '@mui/material';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function ReactHookForm() {
  const [submitData, setSubmitData] =
    useState('送信オブジェクトのデータが入る');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    setSubmitData(JSON.stringify(data));

  return (
    <>
      <Box component="h1">React Hook Form</Box>
      <Box component="div">
        <MuiLink href="/" target="_self" rel="nofollow noreferer">
          Go Home
        </MuiLink>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('example')} />
        <input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <Box component="p">{submitData}</Box>
    </>
  );
}

export default ReactHookForm;
