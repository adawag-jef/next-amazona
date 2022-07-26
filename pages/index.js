import Layout from "../components/Layout";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <ul>
          <Grid container spacing={3}>
            {data.products.map((product) => (
              <Grid item md={4} key={product.name}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size="small" color="primary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ul>
      </div>
    </Layout>
  );
}
