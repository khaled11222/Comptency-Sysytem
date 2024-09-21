import { Container, Grid } from "@mui/material";
import { CourseCard } from "../Card/Card";

export const CardList = ({ withImage }) => (
  <Grid container spacing={2}>
    <Grid item sm={withImage ? 12 : 6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={withImage ? 12 : 6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={withImage ? 12 : 6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={withImage ? 12 : 6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={withImage ? 12 : 6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
    <Grid item sm={withImage ? 12 : 6}>
      <CourseCard isImageVisible={withImage} />
    </Grid>
  </Grid>
);
