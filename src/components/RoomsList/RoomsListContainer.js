import React from 'react';

/* @Components */
import RoomsListComponent from './RoomsListComponent';

const roomsMock = [
	{
		id: 1,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 2,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 3,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 4,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 5,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 6,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 7,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 8,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
	{
		id: 9,
		title: 'День 2: Как найти первого клиента',
		chatMessages: '3000',
		people: '300',
	},
];

const RoomsListContainer = () => {
	return <RoomsListComponent rooms={roomsMock} />;
};

export default RoomsListContainer;
