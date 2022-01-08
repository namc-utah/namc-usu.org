export type MenuItem = {
    label: string
    url: string
    newWindow?: boolean
    children?: MenuItem[]
}
