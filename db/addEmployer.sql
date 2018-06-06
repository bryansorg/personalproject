INSERT INTO employer
    (firstName, lastName,companyName,email,companyBio)
VALUES
    ( $1, $2, $3, $4, $5 )
RETURNING *;