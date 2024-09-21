import { Container, Grid } from "@mui/material";
import { CourseCard } from "../Card/Card";

export const CardList = ({ withImage }) => (
  <Grid container spacing={2}>
    <Grid item sm={6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
  </Grid>
);
