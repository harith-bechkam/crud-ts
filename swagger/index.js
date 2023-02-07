/** 
 * @swagger 
 *  paths:
 *    /api/users/add:
 *      post:
 *        summary: Creates a new record.
 *        consumes:
 *          - application/json
 *        parameters:
 *          - in: body
 *            name: user
 *            description: It creates new record.
 *            schema:
 *              type: object
 *              properties:
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *                email:
 *                  type: string 
 *        responses:
 *          201:
 *            description: Created
 * 
 *    /api/users/list:
 *      get: 
 *        summary: Get all user records
 *        responses:  
 *          200: 
 *            description: Success
 * 
 *    /api/users/update:
 *      put:
 *        summary: Update made in user model.
 *        consumes:
 *          - application/json
 *        parameters:
 *          - in: body
 *            name: user
 *            description: Update made in user model.
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *                email:
 *                  type: string
 *        responses:
 *          201:
 *            description: Updated
 *    /api/users/delete: 
 *      delete:
 *        summary: Delete user records.
 *        consumes:
 *          - application/json
 *        parameters:
 *          - in: body
 *            name: user
 *            description: Delete user records.
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *        responses:
 *          200:
 *            description: Deleted
 */