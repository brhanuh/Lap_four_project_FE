import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as ImIcons from 'react-icons/im'

export const SidebarData = [{
    title : 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
title : 'Login',
path: '/login',
icon: <RiIcons.RiLoginCircleFill />,
cName: 'nav-text'
},
{
title : 'Contacts',
path: '/contacts',
icon: <RiIcons.RiContactsBookFill />,
cName: 'nav-text'
},
{
title : 'Hub',
path: '/hub',
icon: <ImIcons.ImStatsBars2 />,
cName: 'nav-text'
}

]

