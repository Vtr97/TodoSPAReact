import { Modal, Button, Form } from 'react-bootstrap';
import { TodoItem } from '../model';
import React, { useState } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';

interface FormModalProps {
    show: boolean;
    onHide: () => void;
    onInsert: (item:TodoItem) => void; // Callback to notify parent of successful insert
}

const InsertFormModal: React.FC<FormModalProps> = ({ show, onHide, onInsert}) => {
    const [formData, setFormData] = useState<TodoItem>({
        id:0,
        description:"",
        tags: [],
        deadline:""
    })
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: Handle form submission
        onInsert(formData);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name ==="tags" ? value.split(",").map(tag => tag.trim()) : value
        }))
    }

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
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control
                            name="tags"
                            type="text"
                            placeholder="tag1, tag2, tag3"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="deadline">
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control name="deadline" type="date"  onChange={handleChange}/>
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
