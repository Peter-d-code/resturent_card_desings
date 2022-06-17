const main_container = document.querySelector(".main_container")[0];
const body = document.getElementsByTagName('body')
const _create_Element = (elm,_class_name)=>{
const elmnt = document.createElement(elm)
elmnt.className = _class_name
console.log(elmnt)
document.body.appendChild(elmnt)
}
const _append = (_target_class_name, _element_name, _element_class_name,_count)=>{
    for (let i =1; i<=_count;i++){
        const _html_tag_selector=  document.getElementsByClassName(_target_class_name)[0]
        const _newly_user_created_Tag = document.createElement(_element_name)
        _newly_user_created_Tag.className = _element_class_name + " " +_element_class_name.split("_")[_element_class_name.split("_").length-1]+i

        _html_tag_selector.append(_newly_user_created_Tag)
    }
}
const content_ = ([...tag], [...list_data])=>{
    tag.map((e,index_map)=>e.forEach((element,index) => {
        e[index].style.display = "flex"
        e[index].style.justifyContent = "center"
        e[index].style.alignItems = "center"
        if(index_map === 0){
        e[index].style.width = "60%"
        e[index].style.height = "22%"
        // e[index].style.backgroundColor = "blue"
        e[index].style.marginTop = "10%"
        e[index].style.fontSize = "200%"
        
    }
    if(index_map === 1){
        e[index].style.width = "90%"
        e[index].style.height= "60%"
        e[index].style.fontSize = "120%"
        // e[index].style.backgroundColor = "orange"
    }
        console.log(index_map)
        e[index].textContent = list_data[index_map][index]
        console.log(e[index])
        // e.textContent = list_data[index]
 
    }));
}

const calling = ()=>{
    _append('main_container', 'div', "columns_flex",2)
_append('flex1', 'div',"_top_window_bar_childern",2)
_append('flex2', 'div',"card",3)
_append('childern1', 'div',"_top_window_bar_childern_icons",1)
_append('card1', 'div',"card_child_cardicons1",1)

_append('card2', 'div',"card_child_cardicons2",1)

_append('card3', 'div',"card_child_cardicons3",1)

_append('card1', 'div',"_content1",1)
_append('card2', 'div',"_content2",1)
_append('card3', 'div',"_content3",1)
_append('content11', 'div',"card_headingcontainer",2)
_append('content21', 'div',"card_headingcontainer",2)
_append('content31', 'div',"card_headingcontainer",2)

content_([document.querySelectorAll('.headingcontainer1'), document.querySelectorAll('.headingcontainer2')], [["Meetings", "Quick Delivery", "Quick Orders"],["Better Enviroment For Meetings, Get Together, Hurry Up Book This Place For Your Next Ocassion",

"We Care About Your Hunger, We Bring Fastest Develivery of Orders, We Will Never Let You Wait For Your Orders",

"We Will Deliver At Your Door Place Just Follow Some Simlpe Steps And There You Go, You would have Your Order"]])
}





 const close = ()=> {
    
    document.querySelector(".icons1").onclick = ()=>{
    document.querySelector('body').removeChild(document.querySelector(".main_container"))

 const   open_btn_container = document.createElement('div')
 open_btn_container.className = "open_btn_container"
 open_btn = document.createElement('div')
 open_btn.className = "open_btn"
 open_btn.textContent ="Open"
 open_btn_container.appendChild(open_btn)
 document.querySelector('body').appendChild(open_btn_container)
open()
 }
}
 const open = ()=>{
    document.body.querySelector(".open_btn").onclick  = ()=>{
    document.querySelector('body').removeChild(document.querySelector(".open_btn_container"))
    const   open_btn_container = document.createElement('div')
    open_btn_container.className = "main_container"
    document.querySelector('body').appendChild(open_btn_container)
// console.log("DF")
calling()
close()
}
 }
calling()
close()
