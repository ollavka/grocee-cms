import type { User } from 'cms-types'

export const checkRole = (allRoles: User['roles'] = [], user?: User): boolean => {
  if (user) {
    if (
      allRoles.some(role => {
        return user?.roles?.some(individualRole => {
          return individualRole === role
        })
      })
    )
      return true
  }

  return false
}
