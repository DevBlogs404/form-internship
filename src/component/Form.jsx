// import React from "react";
// import { useFormik } from "formik";
// import formValidationSchema from "../validation/FormValidation";
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Button,
//   Grid,
//   Container,
//   Typography
// } from "@mui/material";
// import { countries, hobbies } from "../data";

// const Form = () => {

//   // formik for form state handling and yup for validation
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       address: "",
//       country: "",
//       gender: "",
//       hobbies: [],
//     },
//     formValidationSchema,
//     onSubmit: (values) => {
//       alert("Form submitted Successfully");
//       console.log("User Details: ",values);
//     },
//   });

//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight:"100vh",
//       }}
//     >
//       <form onSubmit={formik.handleSubmit}>
//       <Typography  variant="h2" mb={4} align="center" fontFamily={'sans-serif'} fontWeight={'600'}>FORM-MUI</Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="name"
//               name="name"
//               label="Name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helpertext={formik.touched.name && formik.errors.name}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="address"
//               name="address"
//               label="Address"
//               multiline
//               rows={4}
//               value={formik.values.address}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.address && Boolean(formik.errors.address)}
//               helpertext={formik.touched.address && formik.errors.address}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel id="country-label">Country</InputLabel>
//               <Select
//                 labelId="country-label"
//                 id="country"
//                 name="country"
//                 value={formik.values.country}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.country && Boolean(formik.errors.country)}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                 {countries?.map((country) => (
//                   <MenuItem key={country.value} value={country.value}>
//                     {country.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <RadioGroup
//               row
//               id="gender"
//               name="gender"
//               value={formik.values.gender}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             >
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel
//                 value="other"
//                 control={<Radio />}
//                 label="Other"
//               />
//             </RadioGroup>
//           </Grid>
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
//               <Select
//                 labelId="hobbies-label"
//                 id="hobbies"
//                 name="hobbies"
//                 multiple
//                 value={formik.values.hobbies}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
//               >
//                 {hobbies?.map((hobby) => (
//                   <MenuItem key={hobby.value} value={hobby.value}>
//                     {hobby.label}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             display={"flex"}
//             alignItems={"center"}
//             justifyContent={"center"}
//           >
//             <Button fullWidth variant="contained" color="primary" type="submit">
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default Form;

import React from "react";
import { useFormik } from "formik";
import formValidationSchema from "../validation/FormValidation";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { countries, hobbies } from "../data/data";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      country: "",
      gender: "",
      hobbies: [],
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      alert("Form submitted successfully");
      console.log("User Details: ", values);
    },
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h3" mb={4} align="center"  fontFamily="sans-serif" fontWeight={600}>
        FORM-MUI
      </Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="dense"
        />

        <TextField
          fullWidth
          id="address"
          name="address"
          label="Address"
          multiline
          rows={4}
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          margin="dense"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <RadioGroup
          row
          id="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="dense"
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <FormControl fullWidth margin="normal">
          <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
          <Select
            labelId="hobbies-label"
            id="hobbies"
            name="hobbies"
            multiple
            value={formik.values.hobbies}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
            margin="dense"
          >
            {hobbies.map((hobby) => (
              <MenuItem key={hobby.value} value={hobby.value}>
                {hobby.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button fullWidth variant="contained" color="primary" type="submit" margin="normal">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;

