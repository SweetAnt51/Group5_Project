import React, {Fragment, useState, useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../../data/types"


const Card = ({item, index, moveItem, status, user}) =>{
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item:  {...item, index },
        type: ITEM_TYPE,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    drag(drop(ref));

    const getIcon = (status) => {
        if (status === 'submitted'){
            return "📬"
        } else if (status === 'in review'){
            return "📝"
        } else if (status === 'rejected'){
            return "❌"
        } else if (status === 'accepted'){
            return "✅"
        }
        return null
    }

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <div className={"color-bar"} style={{ backgroundColor: status.color }}/>
                <p className={"item-title"}>{item.title}</p>
                <p className={"item-status"}>{getIcon(item.status)}</p>
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
                user={user}
            />
        </Fragment>
    );
};

export default Card;