import {Container, Grid} from "@material-ui/core";

import AccountProfile from "../pageComponents/account/AccountProfile";
import AccountProfileDetails from "../pageComponents/account/AccountProfileDetails";
import { Helmet } from "react-helmet";

const Account = () => (
  <>
    <Helmet>
      <title>Account</title>
    </Helmet>
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </div>
  </>
);

export default Account;
