import { Modal, Button, Form } from 'react-bootstrap';

interface FormModalProps {
    show: boolean;
    onHide: () => void;
    onInsertSuccess: () => void; // Callback to notify parent of successful insert
}

const InsertFormModal: React.FC<FormModalProps> = ({ show, onHide, onInsertSuccess }) => {
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: Handle form submission
        onInsertSuccess();
    };

    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="item-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name="description"
                            type="text"
                            placeholder="Describe your task"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control
                            name="tags"
                            type="text"
                            placeholder="tag1, tag2, tag3"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="deadline">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control name="deadline" type="date" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Save
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default InsertFormModal;
