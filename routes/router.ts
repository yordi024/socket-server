import { Router, Request, Response } from "express";

const router = Router();

router.get('/mensajes', ( req: Request, res: Response ) => {
    res.json({
        "ok": true,
        "message": "All is right"
    })
});

router.post('/mensajes', ( req: Request, res: Response ) => {

    const message = req.body.msg;
    const from = req.body.from;

    res.json({
        "ok": true,
        message,
        from
    })
});

router.post('/mensajes/:id', ( req: Request, res: Response ) => {

    const message = req.body.msg;
    const from    = req.body.from;
    const id      = req.params.id;

    res.json({
        "ok": true,
        message,
        from,
        id
    })
});

export default router;