import { ListGroup, Tab } from "react-bootstrap";
import { TodoItem } from "../model";
import ListItem from "./ListItem";

interface NewestPaneProps{
    items: TodoItem[];
    onCheck: (id:number) => void;
    isChecked: (id:number) => boolean
}

const NewestPane: React.FC<NewestPaneProps> = ({items,onCheck,isChecked}) =>{
    const sortedItems = [... items].sort((a,b) => {
        const dateA = a.deadline ? new Date(a.deadline).getTime() : 0;
        const dateB = b.deadline ? new Date(b.deadline).getTime() : 0;
        return dateB - dateA
    })

    return (
        <Tab.Pane eventKey="newest-pane" id="newest-pane">
            <ListGroup id="newest-contents" variant="flsuh">
                {sortedItems.map((item) => (
                    <ListItem key ={item.id} item={item} isChecked={isChecked(item.id)} 
                    onCheck={onCheck}>

                    </ListItem>
                ))}

            </ListGroup>
        </Tab.Pane>
    );
}

export default NewestPane;