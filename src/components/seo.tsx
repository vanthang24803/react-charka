import { Helmet } from "react-helmet";

type Props = {
  title: string | undefined;
  description?: string;
};

export const Seo = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
