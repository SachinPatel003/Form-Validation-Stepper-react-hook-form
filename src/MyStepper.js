import {
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  FormProvider,
  useForm,
  useFormContext,
  Controller,
} from "react-hook-form";

const getSteps = () => {
  return ["USER INFORMATION", "AQUISITION", "CULTIVATION", "CULTIVATION2"];
};

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedStep, setSkippedStep] = useState([]);
  const steps = getSteps();
  const isStepFailed = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const methods = useForm({
    // mode:"onChange",
    defaultValues: {
      firstName: "",
      emailAddress: "",
      NumberOfConstituents: "",
      NoOfDonorsYear1: "",
      NoOfDonorsYear2: "",
      DonorsPercentChange: "",
      giftSizeYear1: "",
      giftSizeYear2: "",
      giftSizePercentChange: "",
      givingYear1: "",
      givingYear2: "",
      givingPercentChange: "",
    },
  });

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const handleSkip = () => {
    setSkippedStep([activeStep, ...skippedStep]);
    setActiveStep(activeStep + 1);
  };
  const isStepSkipped = (step) => {
    return skippedStep.includes(step);
  };
  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
      fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          console.log(data);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedStep(skippedStep.filter((skipItem) => skipItem !== activeStep));
    }
  };
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const UserInformation = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <>
        <Controller
          name="firstName"
          rules={{
            required: "Please include your first name",
            minLength: {
              value: 4,
              message: "minimum 4 characters required",
            },
          }}
          control={control}
          render={({ field }) => (
            <>
              <TextField
                id="first-name"
                label="What's your First Name? *"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName?.message}
              />
              {/* {errors.firstName && <div>{errors.firstName.message}</div>} */}
            </>
          )}
        />
        <Controller
          name="emailAddress"
          rules={{
            required: "Please include your Email.",
            pattern: {
              // eslint-disable-next-line
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please enter a valid email address ok",
            },
          }}
          control={control}
          render={({ field }) => (
            <>
              <TextField
                id="E-mail"
                label="What's your E-mail Address? *"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors.emailAddress)}
                helperText={errors.emailAddress?.message}
              />
            </>
          )}
        />
        <Controller
          name="NumberOfConstituents"
          control={control}
          rules={{
            required: "Please enter a valid number",
          }}
          render={({ field }) => (
            <TextField
              id="NumberOfConstituents"
              label="What's the Total Number of Constituents in your Database? *"
              variant="outlined"
              type="number"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors.NumberOfConstituents)}
              helperText={errors.NumberOfConstituents?.message}
            />
          )}
        />
      </>
    );
  };
  const Aquisition = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="NoOfDonorsYear1"
          rules={{
            required: "Please enter a valid number",
          }}
          render={({ field }) => (
            <TextField
              id="NoOfDonorsYear1"
              label="What was your number of total donors in year 1? *"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.NoOfDonorsYear1)}
              helperText={errors.NoOfDonorsYear1?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="NoOfDonorsYear2"
          rules={{
            required: "Please enter a valid number",
          }}
          render={({ field }) => (
            <TextField
              id="NoOfDonorsYear2"
              label="What was your number of total donors in year 2? *"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.NoOfDonorsYear2)}
              helperText={errors.NoOfDonorsYear2?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="DonorsPercentChange"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              id="DonorsPercentChange"
              label="Total Donors Percent Change"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.DonorsPercentChange)}
              helperText={errors.DonorsPercentChange?.message}
            />
          )}
        />
      </>
    );
  };
  const Cultivation = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          rules={{
            required: "Please enter a valid number",
          }}
          name="giftSizeYear1"
          render={({ field }) => (
            <TextField
              id="giftSizeYear1"
              label="What was your average gift size in year 1? *"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.giftSizeYear1)}
              helperText={errors.giftSizeYear1?.message}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: "Please enter a valid number",
          }}
          name="giftSizeYear2"
          render={({ field }) => (
            <TextField
              id="giftSizeYear2"
              label="What was your average gift size in year 2? *"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.giftSizeYear2)}
              helperText={errors.giftSizeYear2?.message}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="giftSizePercentChange"
          render={({ field }) => (
            <TextField
              id="country"
              label="Average Gift Size Percent Change"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.giftSizePercentChange)}
              helperText={errors.giftSizePercentChange?.message}
            />
          )}
        />
      </>
    );
  };
  const Cultivation2 = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          rules={{
            required: "Please enter a valid number",
          }}
          name="givingYear1"
          render={({ field }) => (
            <TextField
              id="givingYear1"
              label="What was your total giving in Year 1? *"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.givingYear1)}
              helperText={errors.givingYear1?.message}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: "Please enter a valid number",
          }}
          name="givingYear2"
          render={({ field }) => (
            <TextField
              id="givingYear2"
              label="What was your total giving in Year 2? *"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.givingYear2)}
              helperText={errors.givingYear2?.message}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="givingPercentChange"
          render={({ field }) => (
            <TextField
              id="givingPercentChange"
              label="Average Gift Size Percent Change"
              variant="outlined"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors.givingPercentChange)}
              helperText={errors.givingPercentChange?.message}
            />
          )}
        />
      </>
    );
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <UserInformation />;
      case 1:
        return <Aquisition />;
      case 2:
        return <Cultivation />;
      case 3:
        return <Cultivation2 />;
      default:
        return "this is default";
    }
  }

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">This is optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          if (isStepFailed() && activeStep === index) {
            labelProps.error = true;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography align="center" variant="h1">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Button
                variant="contained"
                onClick={handleBack}
                disabled={activeStep === 0}
                color="primary"
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
              )}
              <Button
                variant="contained"
                // onClick={handleNext}
                color="primary"
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </>
  );
};

export default MyStepper;
