import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const CustomChip = styled(Chip)(
  ({ theme, textColor, chipColor, backgroundColor }) => ({
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: 8,
    "& .MuiChip-label": {
      display: "flex",
      alignItems: "center",
    },
    "& .MuiChip-dot": {
      height: "8px",
      width: "8px",
      borderRadius: "10px",
      backgroundColor: chipColor,
      marginRight: theme.spacing(1),
    },
  })
);

const courseChips = [
  {
    label: "School of Business Administration",
    textColor: "#3730A3",
    backgroundColor: "#E0E7FF",
    chipColor: "#818CF8",
  },
  {
    label: "General Business and Entrepreneurship",
    textColor: "#92400E",
    backgroundColor: "#FEF3C7",
    chipColor: "#FBBF24",
  },
  {
    label: "Cognitive Skills",
    textColor: "#92400E",
    backgroundColor: "#FEE2E2",
    chipColor: "#F87171",
  },
  {
    label: "Analytical Skills",
    textColor: "#065F46",
    backgroundColor: "#D1FAE5",
    chipColor: "#34D399",
  },
];

const CourseChip = ({ label, textColor, chipColor, backgroundColor }) => {
  console.log({ label, textColor, chipColor, backgroundColor });

  return (
    <CustomChip
      textColor={textColor}
      chipColor={chipColor}
      backgroundColor={backgroundColor}
      label={
        <>
          <span className="MuiChip-dot" />
          <Typography variant="body2" fontWeight={600}>
            {label}
          </Typography>
        </>
      }
    />
  );
};

export const CourseCard = ({ isImageVisible }) => {
  return (
    <Card
      sx={{
        textAlign: "left",
        borderRadius: "10px",
        border: "1px solid #CCE4F3",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          flexWrap={{ xs: "wrap" }}
          justifyContent="space-between"
        >
          <Box
            marginRight={{ sm: 5 }}
            display="flex"
            flexDirection={"column"}
            mb={2}
          >
            <Typography variant="body2" fontWeight={600} color="#0C4A6E">
              OPMG 405
            </Typography>
            <Typography mb={2} variant="h5" fontWeight={700} color="#0369A1">
              Project Management
            </Typography>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              {courseChips.map(
                ({ label, textColor, backgroundColor, chipColor }) => (
                  <CourseChip
                    key={label}
                    label={label}
                    textColor={textColor}
                    backgroundColor={backgroundColor}
                    chipColor={chipColor}
                  />
                )
              )}
            </div>
          </Box>

          {isImageVisible && (
            <Box
              component="img"
              src="https://via.placeholder.com/194"
              alt="Description of image"
              width="194px"
              height="194px"
              ml={2}
            />
          )}
        </Box>

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            style={{ textTransform: "none" }}
          >
            Enroll
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
