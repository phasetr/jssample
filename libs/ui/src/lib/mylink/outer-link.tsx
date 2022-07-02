import { Link as MuiLink } from "@mui/material";

export type OuterLinkProps = {
  href: string;
  key: string;
  content: any;
};

export function OuterLink({ href, key, content }: OuterLinkProps) {
  return (
    <MuiLink href={href} key={key} target="_blank" rel="noopener noreferrer">
      {content}
    </MuiLink>
  );
}

export default OuterLink;
