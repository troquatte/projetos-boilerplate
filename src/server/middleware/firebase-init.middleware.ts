import { NextFunction, Request, Response } from 'express';
import * as admin from 'firebase-admin';
import { environment } from '../../environments/environment';

export class MiddlewareFirebase {
  public initAdmin(req: Request, res: Response, next: NextFunction) {
    if (typeof window === 'undefined' && !admin.apps.length) {
      try {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: environment.cert.projectId,
            clientEmail: environment.cert.clientEmail,
            privateKey: environment.cert.privateKey?.replace(/\\n/g, '\n'),
          }),
        });
      } catch (error) {
        console.error('Error initializing Firebase Admin SDK:', error);
      }
    }
    next();
  }
}

export const middlewareFirebase = new MiddlewareFirebase();
