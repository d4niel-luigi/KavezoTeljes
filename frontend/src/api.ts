import axios from 'axios';

const API_URL = 'http://localhost:3000/api/koncertek'; 

export const getConcerts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching concerts:', error);
    throw error;
  }
};


export const createConcert = async (concertData: {
  performer: string;
  started_at: string;
  lenght: number;
}) => {
  try {
    const response = await axios.post(API_URL, concertData);
    return response.data;
  } catch (error) {
    console.error('Error creating concert:', error);
    throw error;
  }
};


export const markConcertAsCancelled = async (concertId: number) => {
  try {
    const response = await axios.patch(`${API_URL}/${concertId}`, {
      fail: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error marking concert as cancelled:', error);
    throw error;
  }
};
