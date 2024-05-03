/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-04-30 20:59:20
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-05-01 18:09:40
 * @FilePath: /lulab_nest_backend/src/graphql/graphql.resolver.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlService } from './graphql.service';
import { Graphql } from './entities/graphql.entity';
import { CreateGraphqlInput } from './dto/create-graphql.input';
import { UpdateGraphqlInput } from './dto/update-graphql.input';

@Resolver(() => Graphql)
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) { }

  @Mutation(() => Graphql)
  createGraphql(@Args('createGraphqlInput') createGraphqlInput: CreateGraphqlInput) {
    return this.graphqlService.create(createGraphqlInput);
  }

  @Query(() => [Graphql], { name: 'graphql' })
  findAll() {
    return this.graphqlService.findAll();
  }

  @Query(() => Graphql, { name: 'graphql0' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.findOne(id);
  }

  @Mutation(() => Graphql)
  updateGraphql(@Args('updateGraphqlInput') updateGraphqlInput: UpdateGraphqlInput) {
    return this.graphqlService.update(updateGraphqlInput.id, updateGraphqlInput);
  }

  @Mutation(() => Graphql)
  removeGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlService.remove(id);
  }
}
