import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from "@/pages/api/utils/db/db_browser";
import "@/pages/api/utils/patch/bigint_patch";
import HttpCode from "@/pages/api/utils/http_code";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req;
    switch (method) {
        case "GET":
            prisma.b_promo_info_collection.findMany({
                    where: {
                        status: {
                            not: 0
                        }
                    }
                }
            ).then((value: any) => {
                res.status(HttpCode.OK).json({code: HttpCode.OK, msg: "success", data: {data: value}});
            }).catch((reason: any) => {
                res.status(HttpCode.OK).json({code: 500, msg: "server error", data: {data: reason}});
            });
            break;
        case "POST":
            console.log(`req.body:${JSON.stringify(req.body)}`);
            const {source, vip_code, name, email, remark} = req.body;
            await prisma.b_promo_info_collection.create({
                data: {
                    source: `${source}`,
                    vip_code: `${vip_code}`,
                    name: `${name}`,
                    email: `${email}`,
                    remark: `${remark}`,
                    status: 1,
                }
            }).then((result: any) => {
                res.status(HttpCode.OK).json({code: HttpCode.OK, msg: "success", data: {}});
            }).catch((reason: any) => {
                res.status(HttpCode.OK).json({code: 500, msg: "server error", data: {reason}});
            });
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(HttpCode.OK).json({
                code: HttpCode.ERROR_REQUEST_METHOD_CODE,
                msg: HttpCode.ERROR_REQUEST_METHOD_MSG,
                data: {}
            });
            break;
    }
}
