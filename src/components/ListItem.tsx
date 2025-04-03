import React from 'react';
import { ListGroup, Row, Col, Form, Badge } from 'react-bootstrap';
import { TodoItem } from '../model';

interface ListItemProps {
    item: TodoItem; // Receive a TodoItem object as props
    isChecked: boolean; // Optional prop to indicate if the item is checked
    onCheck: (id: number) => void; // Optional callback for checkbox change
}

const ListItem: React.FC<ListItemProps> = ({ item, isChecked, onCheck }) => {
    const formatDeadline = (date?: string): string => {
        return (date) ? new Date(date).toUTCString().slice(0,16) : ""
    };

    return (
        <ListGroup.Item>
            <Row>
                <Col xs={10}>
                    <Form.Check
                        type="checkbox"
                        label={
                            <>
                                <span className="pr-2">{item.description}</span>
                                <span className="badge-container px-1">
                                    {item.tags?.map((tag, index) => (
                                        <Badge key={index} pill bg="secondary" className="mx-1">
                                            {tag}
                                        </Badge>
                                    ))}
                                </span>
                            </>
                        }
                        checked={isChecked}
                        onChange={() => onCheck(item.id)}
                    />
                </Col>
                <Col xs={2} className="d-flex justify-content-end align-items-center">
                    <span className="list-item-deadline">{formatDeadline(item.deadline)}</span>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default ListItem;
