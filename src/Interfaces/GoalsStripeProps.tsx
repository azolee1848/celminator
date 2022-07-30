export default interface GoalsStripeProps {
    circle: boolean,
    number?: number,
    text: string,
    onAddFunction?: () => void,
    onEditFunction?: () => void,
    onDeleteFunction?: () => void
}