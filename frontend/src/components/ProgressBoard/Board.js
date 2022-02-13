import Card from './Card';
import Dropper from './Dropper';
import Column from './Column';
import {data, statuses} from '../../data';
import { useState, useEffect } from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import PermMiniDrawerLeft from '../PermMiniDrawerLeft';
import Filters from './Filters';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

const Board = (props) => {
    const [items, setItems] = useState(null);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    //Start Drawer Section
    const [open, setOpen] = useState(false);
    const [drawer, setDrawer] = useState('left');
    
    const toggleDrawer = (anchor, isOpen) => (event) => {
        setDrawer(anchor);
        setOpen(isOpen);
    };

    const [filters, setFilters] = useState(
        { major : "",
          name : "",
          start_date : "",
          end_date : ""
        }
      )


    const dateCompare = (start, end, input ) => {
        const date = Date.parse(input)
        if (start === '' && end !== ''){
            if(Date.parse(end) > input){
                return true
            }else{
                return false
            }
        }else if (start !== '' && end === ''){
            if(Date.parse(start) <= date){
                return true
            }else{
                return false
            }
        }else if (start === '' && end === ''){
            return true
        }else{
            if (Date.parse(start) <= date && Date.parse(end) >= date){
                return true
            }
            else{
                return false
            }
        }
    }


    useEffect( async() => {
        console.log('starting application fetch')
        await fetch('/get_applications',{
            method: "GET",
            }).then(res => {
                if (res.status !== 200){
                    console.log(res);
                    return false;
                }
              return res.json();
          }).then(data => {
              setItems(data)
              console.log('application fetch successful')
          });
    }, []

    )

    

    // const getApps = async() =>{
    //     await fetch('/get_applications',{
    //         method: "GET",
    //         }).then(res => {
    //             if (res.status !== 200){
    //                 console.log(res);
    //                 return false;
    //             }
    //           return res.json();
    //       }).then(data => {
    //         console.log(data)  
    //         setItems(data)
    //       });
    // }

    // getApps();
    
    return (
        items !== null ?
            <FadeInDiv>
                
                <PermMiniDrawerLeft toggleDrawer={toggleDrawer}/>
                
                <Filters open={open} drawer={drawer} toggleDrawer={toggleDrawer} filters={filters} setFilters={setFilters} />

                <div className={"row"} style={{width:'100%', minWidth:'1735px'}}>
                    {statuses.map(s => {
                        return (
                            <div key={s.status} className={"col-wrapper"}>
                                <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                                <Dropper onDrop={onDrop} status={s.status}>
                                    <Column>
                                        {items
                                            .filter(i => i.status === s.status)
                                            .filter(i => 
                                                {
                                                if (filters.major !== ''){
                                                    if (i.major === filters.major){
                                                        return i
                                                    }
                                                }else{
                                                    return i
                                                }
                                            })
                                            .filter(i => 
                                                {
                                                if (filters.name !== ''){
                                                    if (i.title.toLowerCase().includes(filters.name.toLowerCase())){
                                                        return i
                                                    }
                                                }else{
                                                    return i
                                                }
                                            })
                                            .filter(i => {
                                                return dateCompare(filters.start_date, filters.end_date, i.submit_date)
                                            })                                          
                                            .map((i, idx) => <Card user={props.user} key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                        }
                                    </Column>
                                </Dropper>
                            </div>
                        );
                    })}
                </div>
            </FadeInDiv>
        :
        null
    );
};


export default Board