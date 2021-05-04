import{ useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons';

import { selectEvents } from '../../store/slices/eventSlice';

function Event({item, openDialog}) {
    return (
        <Card style={{ padding: '8px', margin: "20px 0", cursor: 'default' }}>

        <Box display="flex" justifyContent="space-between">
            <Typography>
                Event name: {item.eventName}
            </Typography>
            <EditIcon onClick={(e) => openDialog(e, item, 'edit')} style={{ cursor: 'pointer', color: '#6b6b6b' }} />
        </Box>
        <Typography>
            Description: {item.description}
        </Typography>
    </Card>
    )
};

function Events({openDialog}) {
    const [eventsDrag, setEventsDrag] = useState();

    const events = useSelector(selectEvents)

    useEffect(() => {
        if (events) {
            setEventsDrag(events)
        }
    }, [events])

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(events);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setEventsDrag(items);
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {eventsDrag?.map((item, index) => {
                            return (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <Grid item xl={3} key={item.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Event item={item} openDialog={openDialog}/>
                                        </Grid>
                                    )}

                                </Draggable>
                            );
                        })}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Events
