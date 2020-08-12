import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  

  constructor(
    private http : HttpClient
    ) { }

  createUser(username,password) {
    return this.http.post(`${API_URL}/createUser`,{username,password})
  }

  retreiveTodoList(username){
    console.log(username)
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  } 

  retreiveTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todo/${id}`)
     
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/users/${username}/todo/${id}`)
     
  }

  updateTodo(username, id, todo){
    return this.http.put(`${API_URL}/users/${username}/todo/${id}`,todo)
  }

  createTodo(username, todo){
    return this.http.post(`${API_URL}/users/${username}/todo`,todo)
  }

  gethttpService(){
    return null;
  }
}
