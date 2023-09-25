import { FeatureClientCard } from "@/components";
import Grid from "@/components/Grid/Grid";
import { featureElement } from "@/utils/data/FeatureCardData";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>EduStage</h1>
      <Grid type={"four"}>
        {featureElement.map((e) => (
          <FeatureClientCard type={"feature"} {...e} key={e?.id} />
        ))}
      </Grid>
    </>
  );
}
