<template>
	<div class="user-weekly">
		<div class="week-lr"></div>
		<div class="week-center">
			<div style="margin-top:80px"></div>
			<div class="weekly-line"><h1>已通过审核周报</h1></div>
			  <el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			    <el-table-column
			      label="日期"
			      width="200">
			      <template scope="scope">
			        <el-icon name="time"></el-icon>
			        <span style="margin-left: 10px">{{ scope.row.date }}</span>
			      </template>
			    </el-table-column>

			    <el-table-column
			      label="提交人"
			      width="180">
			      <template scope="scope">
			        <span>{{ scope.row.name }}</span>
			      </template>
			    </el-table-column>

			    <el-table-column
			      label="周报主题"
			      width="500">
			      <template scope="scope">
			        <span>{{ scope.row.theme }}</span>
			      </template>
			    </el-table-column>

			    <el-table-column label="操作">
			      <template scope="scope">
			        <el-button type="primary" size="small">查看</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		</div>
		<div class="week-lr"></div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted:function(){
      this.getData();
    },
    methods: {
      getData:function(){
        var self = this;
        this.$http.get("/static/weekly-history.json").then(function(res){
          console.log(res.data);
          self.tableData = res.data;
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style>
</style>