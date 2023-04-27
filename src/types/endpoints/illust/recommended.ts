import { PixivIllustItem } from '../../pixiv-illust'

/**
 * GET /v1/illust/recommended のレスポンス
 */
export interface GetV1RecommendedIllustResponse {
  illusts: PixivIllustItem[]
  ranking_illusts: unknown[]
  contest_exists: boolean
  privacy_policy: unknown
  next_url: string
}
