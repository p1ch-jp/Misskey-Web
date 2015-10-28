import * as express from 'express';

import { MisskeyExpressRequest } from '../misskeyExpressRequest';
import { MisskeyExpressResponse } from '../misskeyExpressResponse';
import requestApi from '../utils/requestApi';
import mapToHtml from './utils/mapToHtml';

export default function(app: express.Express): void {
	'use strict';
	console.log('Init Web API relay server router');

	app.get('/', (req: MisskeyExpressRequest, res: MisskeyExpressResponse) => {
		if (req.isLogin) {
			res.send(req.session.userId);
		} else {
			res.send('sakuhima');
		}
	});

	app.post('/account/create', (req: MisskeyExpressRequest, res: MisskeyExpressResponse) => {
		requestApi("POST", req.path.substring(1), req.body).then((response: any) => {
			res.json(response);
		});
	});
	
	app.get('/web/album/files', (req: MisskeyExpressRequest, res: MisskeyExpressResponse) => {
		requestApi("GET", req.path.substring(1), req.query).then((files: Object[]) => {
			res.send(mapToHtml(`${__dirname}/../web/sites/desktop/views/dynamic-parts/album/file.jade`, files));
		});
	});

	app.get('*', (req: MisskeyExpressRequest, res: MisskeyExpressResponse) => {
		const userId: string = req.isLogin ? req.session.userId : null;
		requestApi("GET", req.path.substring(1), req.query, userId).then((response: any) => {
			res.json(response);
		});
	});

	app.post('*', (req: MisskeyExpressRequest, res: MisskeyExpressResponse) => {
		const userId: string = req.isLogin ? req.session.userId : null;
		requestApi("POST", req.path.substring(1), req.body, userId).then((response: any) => {
			res.json(response);
		});
	});
}
