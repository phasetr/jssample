import { Link as ReactLink } from 'react-router-dom';

export type InnerLinkProps = {
  to: string;
  content: any;
};

export function InnerLink({ to, content }: InnerLinkProps) {
  return <ReactLink to={to}>{content}</ReactLink>;
}

export default InnerLink;
