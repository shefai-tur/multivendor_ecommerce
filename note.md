enum Role {
  USER
  SELLER
  ADMIN
}

model User {
  id        String   @id @default(uuid())
  name      String?
  email     String   @unique
  picture   String @db.Text
  role      Role     @default(USER)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}