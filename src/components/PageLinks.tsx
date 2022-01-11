import * as React from 'react'
import { Link } from 'gatsby'

export interface PageLinkProps {
    href: string
}

const PageLink: React.FC<PageLinkProps> = ({ href, ...props }: PageLinkProps) => {
    if (href.indexOf('http') === 0) return <a href={href} {...props} target="_blank" rel="noreferrer" />
    else return <Link to={href} {...props} />
}

export default PageLink
