INSERT INTO jobseeker
    (firstName,lastName,email,bio)
VALUES
    ($1, $2, $3, $4)
RETURNING *