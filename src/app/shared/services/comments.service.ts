import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddComment, IComment } from '../interfaces';

@Injectable()
export class CommentsService {
  private readonly COMMENTS_BASE_URL = `appdata/${environment.appKey}/comments`;

  constructor(private http: HttpClient) { }

  addComment(data: IAddComment): Observable<IComment> {
    return this.http.post<IComment>(`${this.COMMENTS_BASE_URL}`, data);
  }

  getCommentByPost(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.COMMENTS_BASE_URL}?query={"post_id": "${id}"}`);
  }
}
